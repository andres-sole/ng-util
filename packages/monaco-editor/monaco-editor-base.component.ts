import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NuMonacoEditorConfig, NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
import { NuMonacoEditorEvent, NuMonacoEditorEventType } from './monaco-editor.types';
import { DPMXLTokenProvider } from './DPMXLTokenProvider';

let loadedMonaco = false;
let loadPromise: Promise<void>;

@Component({
  selector: 'nu-monaco-base',
  template: ``,
  standalone: true,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export abstract class NuMonacoEditorBase implements AfterViewInit, OnChanges, OnDestroy {
  protected _editor?: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
  protected _options!: monaco.editor.IStandaloneEditorConstructionOptions;
  protected _resize$: Subscription | null = null;
  protected _config: NuMonacoEditorConfig;
  protected _disabled?: boolean;

  @Input() height = `200px`;
  @Input() delay = 0;
  @Input()
  set disabled(val: boolean | string) {
    this._disabled = typeof val === 'string' ? true : val;
    this.setDisabled();
  }
  @Input()
  set options(val: monaco.editor.IStandaloneEditorConstructionOptions) {
    this._options = { ...this._config.defaultOptions, ...val };
  }
  get options() {
    return this._options;
  }
  @Output() event = new EventEmitter<NuMonacoEditorEvent>();

  constructor(
    protected el: ElementRef<HTMLElement>,
    @Inject(NU_MONACO_EDITOR_CONFIG) config: NuMonacoEditorConfig,
    @Inject(DOCUMENT) protected doc: any,
    protected ngZone: NgZone,
  ) {
    this._config = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min', ...config };
    this.options = this._config.defaultOptions!;
  }

  protected abstract initMonaco(_options: monaco.editor.IStandaloneEditorConstructionOptions, _initEvent: boolean): void;

  protected notifyEvent(type: NuMonacoEditorEventType, other?: NuMonacoEditorEvent): void {
    this.ngZone.run(() => this.event.emit({ type, editor: this._editor!, ...other }));
  }

  protected setDisabled(): this {
    if (this._editor) {
      (this._editor as monaco.editor.IStandaloneCodeEditor).updateOptions({ readOnly: this._disabled });
    }
    return this;
  }

  private init(): void {
    if (loadedMonaco) {
      loadPromise.then(() => this.initMonaco(this.options, true));
      return;
    }

    loadedMonaco = true;
    loadPromise = new Promise<void>((resolve: () => void, reject: (err: string) => void) => {
      const win: any = window;
      if (win == null) {
        resolve();
        return;
      }

      if (win.monaco) {
        resolve();
        return;
      }

      const baseUrl = this._config.baseUrl;
      const amdLoader = () => {
        win.require.config({ paths: { vs: `${baseUrl}/vs` } });

        this.options = { theme: 'dpm-xl-black', ...this.options };
        const getDpmXlCompletionProvider = (monaco: any) => {
          return {
            provideCompletionItems: () => {
              var suggestions = [
                {
                  label: 'with',
                  kind: monaco.languages.CompletionItemKind.Text,
                  insertText: 'with',
                },
                {
                  label: 'sum',
                  kind: monaco.languages.CompletionItemKind.Keyword,
                  insertText: 'sum(${1:operand} group by ${2:group_by})',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                  label: 'cell_reference',
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  insertText: '{t${1:table}, r${2:row}, c${2:col}, s${2:sht}}',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  documentation: 'cell_reference',
                },
                {
                  label: 'with',
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  insertText: 'with ${1:partial expression}: ${2:expression};',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  documentation: 'cell_reference',
                },
              ];
              return { suggestions: suggestions };
            },
          };
        };

        this._config.monacoLoad = monaco => {
          const id = 'dpm-xl';

          monaco.languages.register({ id });
          monaco.languages.setTokensProvider(id, new DPMXLTokenProvider());

          const literalFg = '3b8737';
          //const idFg = '344482';
          const symbolsFg = '344482';
          const keywordFg = '7132a8';
          const errorFg = 'ff0000';

          monaco.editor.defineTheme('dpm-xl-black', {
            base: 'vs',

            rules: [
              { token: 'with.dpm-xl', foreground: keywordFg },
              { token: 'group_by.dpm-xl', foreground: keywordFg },
              { token: 'abs.dpm-xl', foreground: keywordFg },
              { token: 'isnull.dpm-xl', foreground: keywordFg },

              { token: 'boolean_literal.dpm-xl', foreground: literalFg },
              { token: 'integer_literal.dpm-xl', foreground: literalFg },
              { token: 'decimal_literal.dpm-xl', foreground: literalFg },
              { token: 'percent_literal.dpm-xl', foreground: literalFg },
              { token: 'string_literal.dpm-xl', foreground: literalFg },
              { token: 'letters_numbers.dpm-xl', foreground: literalFg },

              { token: 'and.dpm-xl', foreground: symbolsFg },
              { token: 'or.dpm-xl', foreground: symbolsFg },
              { token: 'xor.dpm-xl', foreground: symbolsFg },
              { token: 'not.dpm-xl', foreground: symbolsFg },
              { token: 'assign.dpm-xl', foreground: symbolsFg },
              { token: 'eq.dpm-xl', foreground: symbolsFg },
              { token: 'ne.dpm-xl', foreground: symbolsFg },
              { token: 'lt.dpm-xl', foreground: symbolsFg },
              { token: 'le.dpm-xl', foreground: symbolsFg },
              { token: 'gt.dpm-xl', foreground: symbolsFg },
              { token: 'ge.dpm-xl', foreground: symbolsFg },

              { token: 'error.dpm-xl', foreground: errorFg },
            ],
            colors: {
              'editor.foreground': '#000000',
            },
          });
          monaco.languages.registerCompletionItemProvider('dpm-xl', getDpmXlCompletionProvider(monaco));
        };
        if (typeof this._config.monacoPreLoad === 'function') {
          this._config.monacoPreLoad();
        }
        win.require(
          ['vs/editor/editor.main'],
          () => {
            if (typeof this._config.monacoLoad === 'function') {
              this._config.monacoLoad(win.monaco);
            }

            this.initMonaco(this.options, true);
            resolve();
          },
          () => {
            reject(`Unable to load editor/editor.main module, please check your network environment.`);
          },
        );
      };

      if (!win.require) {
        const loaderScript = this.doc.createElement('script') as HTMLScriptElement;
        loaderScript.type = 'text/javascript';
        loaderScript.src = `${baseUrl}/vs/loader.js`;
        loaderScript.onload = amdLoader;
        loaderScript.onerror = () => reject(`Unable to load ${loaderScript.src}, please check your network environment.`);
        this.doc.getElementsByTagName('head')[0].appendChild(loaderScript);
      } else {
        amdLoader();
      }
    }).catch(error => this.notifyEvent('load-error', { error }));
  }

  protected cleanResize(): this {
    if (this._resize$) {
      this._resize$.unsubscribe();
    }
    return this;
  }

  protected registerResize(): this {
    this.cleanResize();
    this._resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => {
        this._editor!.layout();
        this.notifyEvent('resize');
      });
    return this;
  }

  protected updateOptions(): void {
    if (!this._editor) return;
    this.ngZone.runOutsideAngular(() => {
      this._editor!.dispose();
      this.initMonaco(this._options, false);
    });
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.init(), +this.delay));
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    const allKeys = Object.keys(changes);
    if (allKeys.length === 1 && allKeys[0] === 'disabled') return;
    this.updateOptions();
  }

  ngOnDestroy(): void {
    this.cleanResize();
    if (this._editor) {
      this._editor.dispose();
      this._editor = undefined;
    }
  }
}
