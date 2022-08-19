import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
import { DPMXLTokenProvider } from './DPMXLTokenProvider';
import * as i0 from "@angular/core";
let loadedMonaco = false;
let loadPromise;
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NuMonacoEditorBase {
    constructor(el, config, doc, ngZone) {
        this.el = el;
        this.doc = doc;
        this.ngZone = ngZone;
        this._resize$ = null;
        this.height = `200px`;
        this.delay = 0;
        this.event = new EventEmitter();
        this._config = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min', ...config };
        this.options = this._config.defaultOptions;
    }
    set disabled(val) {
        this._disabled = typeof val === 'string' ? true : val;
        this.setDisabled();
    }
    set options(val) {
        this._options = { ...this._config.defaultOptions, ...val };
    }
    get options() {
        return this._options;
    }
    notifyEvent(type, other) {
        this.ngZone.run(() => this.event.emit({ type, editor: this._editor, ...other }));
    }
    setDisabled() {
        if (this._editor) {
            this._editor.updateOptions({ readOnly: this._disabled });
        }
        return this;
    }
    init() {
        if (loadedMonaco) {
            loadPromise.then(() => this.initMonaco(this.options, true));
            return;
        }
        loadedMonaco = true;
        loadPromise = new Promise((resolve, reject) => {
            const win = window;
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
                const getDpmXlCompletionProvider = (monaco) => {
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
                win.require(['vs/editor/editor.main'], () => {
                    if (typeof this._config.monacoLoad === 'function') {
                        this._config.monacoLoad(win.monaco);
                    }
                    this.initMonaco(this.options, true);
                    resolve();
                }, () => {
                    reject(`Unable to load editor/editor.main module, please check your network environment.`);
                });
            };
            if (!win.require) {
                const loaderScript = this.doc.createElement('script');
                loaderScript.type = 'text/javascript';
                loaderScript.src = `${baseUrl}/vs/loader.js`;
                loaderScript.onload = amdLoader;
                loaderScript.onerror = () => reject(`Unable to load ${loaderScript.src}, please check your network environment.`);
                this.doc.getElementsByTagName('head')[0].appendChild(loaderScript);
            }
            else {
                amdLoader();
            }
        }).catch(error => this.notifyEvent('load-error', { error }));
    }
    cleanResize() {
        if (this._resize$) {
            this._resize$.unsubscribe();
        }
        return this;
    }
    registerResize() {
        this.cleanResize();
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .subscribe(() => {
            this._editor.layout();
            this.notifyEvent('resize');
        });
        return this;
    }
    updateOptions() {
        if (!this._editor)
            return;
        this.ngZone.runOutsideAngular(() => {
            this._editor.dispose();
            this.initMonaco(this._options, false);
        });
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.init(), +this.delay));
    }
    ngOnChanges(changes) {
        const allKeys = Object.keys(changes);
        if (allKeys.length === 1 && allKeys[0] === 'disabled')
            return;
        this.updateOptions();
    }
    ngOnDestroy() {
        this.cleanResize();
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    }
}
/** @nocollapse */ NuMonacoEditorBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorBase, deps: [{ token: i0.ElementRef }, { token: NU_MONACO_EDITOR_CONFIG }, { token: DOCUMENT }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMonacoEditorBase.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: NuMonacoEditorBase, isStandalone: true, selector: "nu-monaco-base", inputs: { height: "height", delay: "delay", disabled: "disabled", options: "options" }, outputs: { event: "event" }, usesOnChanges: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-base',
                    template: ``,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NU_MONACO_EDITOR_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.NgZone }]; }, propDecorators: { height: [{
                type: Input
            }], delay: [{
                type: Input
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], event: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUxRCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBSSxXQUEwQixDQUFDO0FBTy9CLGtFQUFrRTtBQUNsRSxNQUFNLE9BQWdCLGtCQUFrQjtJQXVCdEMsWUFDWSxFQUEyQixFQUNKLE1BQTRCLEVBQ2pDLEdBQVEsRUFDMUIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBRVQsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBeEJoQixhQUFRLEdBQXdCLElBQUksQ0FBQztRQUl0QyxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFhVCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFReEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxnREFBZ0QsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ3hGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFlLENBQUM7SUFDOUMsQ0FBQztJQXRCRCxJQUNJLFFBQVEsQ0FBQyxHQUFxQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUNJLE9BQU8sQ0FBQyxHQUF1RDtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQWVTLFdBQVcsQ0FBQyxJQUE2QixFQUFFLEtBQTJCO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBUSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUErQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUNuRztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLElBQUk7UUFDVixJQUFJLFlBQVksRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVELE9BQU87U0FDUjtRQUVELFlBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsV0FBVyxHQUFHLElBQUksT0FBTyxDQUFPLENBQUMsT0FBbUIsRUFBRSxNQUE2QixFQUFFLEVBQUU7WUFDckYsTUFBTSxHQUFHLEdBQVEsTUFBTSxDQUFDO1lBQ3hCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDZixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1I7WUFFRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTzthQUNSO1lBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDckMsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUV2RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUQsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO29CQUNqRCxPQUFPO3dCQUNMLHNCQUFzQixFQUFFLEdBQUcsRUFBRTs0QkFDM0IsSUFBSSxXQUFXLEdBQUc7Z0NBQ2hCO29DQUNFLEtBQUssRUFBRSxNQUFNO29DQUNiLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUk7b0NBQzlDLFVBQVUsRUFBRSxNQUFNO2lDQUNuQjtnQ0FDRDtvQ0FDRSxLQUFLLEVBQUUsS0FBSztvQ0FDWixJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO29DQUNqRCxVQUFVLEVBQUUsMENBQTBDO29DQUN0RCxlQUFlLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxlQUFlO2lDQUMvRTtnQ0FDRDtvQ0FDRSxLQUFLLEVBQUUsZ0JBQWdCO29DQUN2QixJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO29DQUNqRCxVQUFVLEVBQUUsZ0RBQWdEO29DQUM1RCxlQUFlLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxlQUFlO29DQUM5RSxhQUFhLEVBQUUsZ0JBQWdCO2lDQUNoQztnQ0FDRDtvQ0FDRSxLQUFLLEVBQUUsTUFBTTtvQ0FDYixJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO29DQUNqRCxVQUFVLEVBQUUsZ0RBQWdEO29DQUM1RCxlQUFlLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxlQUFlO29DQUM5RSxhQUFhLEVBQUUsZ0JBQWdCO2lDQUNoQzs2QkFDRixDQUFDOzRCQUNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7d0JBQ3RDLENBQUM7cUJBQ0YsQ0FBQztnQkFDSixDQUFDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEVBQUU7b0JBQ2pDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQztvQkFFcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFFakUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMzQix3QkFBd0I7b0JBQ3hCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQztvQkFDM0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMzQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUM7b0JBRXpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTt3QkFDeEMsSUFBSSxFQUFFLElBQUk7d0JBRVYsS0FBSyxFQUFFOzRCQUNMLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFOzRCQUMvQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFOzRCQUNuRCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTs0QkFDOUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBRWpELEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQzFELEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQzFELEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQzFELEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQzFELEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQ3pELEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBRTFELEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFOzRCQUM5QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTs0QkFDN0MsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQzlDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFOzRCQUM5QyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTs0QkFDakQsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQzdDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFOzRCQUM3QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTs0QkFDN0MsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7NEJBQzdDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFOzRCQUM3QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTs0QkFFN0MsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7eUJBQy9DO3dCQUNELE1BQU0sRUFBRTs0QkFDTixtQkFBbUIsRUFBRSxTQUFTO3lCQUMvQjtxQkFDRixDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDaEcsQ0FBQyxDQUFDO2dCQUNGLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7b0JBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQzlCO2dCQUNELEdBQUcsQ0FBQyxPQUFPLENBQ1QsQ0FBQyx1QkFBdUIsQ0FBQyxFQUN6QixHQUFHLEVBQUU7b0JBQ0gsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTt3QkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNyQztvQkFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsRUFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxDQUFDLGtGQUFrRixDQUFDLENBQUM7Z0JBQzdGLENBQUMsQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztnQkFDM0UsWUFBWSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sZUFBZSxDQUFDO2dCQUM3QyxZQUFZLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDaEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLFlBQVksQ0FBQyxHQUFHLDBDQUEwQyxDQUFDLENBQUM7Z0JBQ2xILElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3BFO2lCQUFNO2dCQUNMLFNBQVMsRUFBRSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsV0FBVztRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVTLGNBQWM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTZEO1FBQ3ZFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVTtZQUFFLE9BQU87UUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7a0lBbk9tQixrQkFBa0IsNENBeUI1Qix1QkFBdUIsYUFDdkIsUUFBUTtzSEExQkUsa0JBQWtCLG9OQUo1QixFQUFFOzJGQUlRLGtCQUFrQjtrQkFOdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OzBCQTJCSSxNQUFNOzJCQUFDLHVCQUF1Qjs7MEJBQzlCLE1BQU07MkJBQUMsUUFBUTtpRUFuQlQsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRixRQUFRO3NCQURYLEtBQUs7Z0JBTUYsT0FBTztzQkFEVixLQUFLO2dCQU9JLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckV2ZW50LCBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5pbXBvcnQgeyBEUE1YTFRva2VuUHJvdmlkZXIgfSBmcm9tICcuL0RQTVhMVG9rZW5Qcm92aWRlcic7XG5cbmxldCBsb2FkZWRNb25hY28gPSBmYWxzZTtcbmxldCBsb2FkUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWJhc2UnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2VkaXRvcj86IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIHByb3RlY3RlZCBfb3B0aW9ucyE6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuICBwcm90ZWN0ZWQgX3Jlc2l6ZSQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWc7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGhlaWdodCA9IGAyMDBweGA7XG4gIEBJbnB1dCgpIGRlbGF5ID0gMDtcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB0cnVlIDogdmFsO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWw6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4udGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zLCAuLi52YWwgfTtcbiAgfVxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBAT3V0cHV0KCkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE51TW9uYWNvRWRpdG9yRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE5VX01PTkFDT19FRElUT1JfQ09ORklHKSBjb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2M6IGFueSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgYmFzZVVybDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvci9taW4nLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnMhO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRNb25hY28oX29wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBfaW5pdEV2ZW50OiBib29sZWFuKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgbm90aWZ5RXZlbnQodHlwZTogTnVNb25hY29FZGl0b3JFdmVudFR5cGUsIG90aGVyPzogTnVNb25hY29FZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmV2ZW50LmVtaXQoeyB0eXBlLCBlZGl0b3I6IHRoaXMuX2VkaXRvciEsIC4uLm90aGVyIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREaXNhYmxlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICAodGhpcy5fZWRpdG9yIGFzIG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yKS51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRoaXMuX2Rpc2FibGVkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAobG9hZGVkTW9uYWNvKSB7XG4gICAgICBsb2FkUHJvbWlzZS50aGVuKCgpID0+IHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkZWRNb25hY28gPSB0cnVlO1xuICAgIGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQsIHJlamVjdDogKGVycjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcbiAgICAgIGlmICh3aW4gPT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbi5tb25hY28pIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgICAgIGNvbnN0IGFtZExvYWRlciA9ICgpID0+IHtcbiAgICAgICAgd2luLnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgdnM6IGAke2Jhc2VVcmx9L3ZzYCB9IH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHsgdGhlbWU6ICdkcG0teGwtYmxhY2snLCAuLi50aGlzLm9wdGlvbnMgfTtcbiAgICAgICAgY29uc3QgZ2V0RHBtWGxDb21wbGV0aW9uUHJvdmlkZXIgPSAobW9uYWNvOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdmlkZUNvbXBsZXRpb25JdGVtczogKCkgPT4ge1xuICAgICAgICAgICAgICB2YXIgc3VnZ2VzdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICd3aXRoJyxcbiAgICAgICAgICAgICAgICAgIGtpbmQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlRleHQsXG4gICAgICAgICAgICAgICAgICBpbnNlcnRUZXh0OiAnd2l0aCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ3N1bScsXG4gICAgICAgICAgICAgICAgICBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5LZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogJ3N1bSgkezE6b3BlcmFuZH0gZ3JvdXAgYnkgJHsyOmdyb3VwX2J5fSknLFxuICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dFJ1bGVzOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUuSW5zZXJ0QXNTbmlwcGV0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdjZWxsX3JlZmVyZW5jZScsXG4gICAgICAgICAgICAgICAgICBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0LFxuICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogJ3t0JHsxOnRhYmxlfSwgciR7Mjpyb3d9LCBjJHsyOmNvbH0sIHMkezI6c2h0fX0nLFxuICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dFJ1bGVzOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUuSW5zZXJ0QXNTbmlwcGV0LFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogJ2NlbGxfcmVmZXJlbmNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnd2l0aCcsXG4gICAgICAgICAgICAgICAgICBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0LFxuICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogJ3dpdGggJHsxOnBhcnRpYWwgZXhwcmVzc2lvbn06ICR7MjpleHByZXNzaW9ufTsnLFxuICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dFJ1bGVzOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUuSW5zZXJ0QXNTbmlwcGV0LFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogJ2NlbGxfcmVmZXJlbmNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnMgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9jb25maWcubW9uYWNvTG9hZCA9IG1vbmFjbyA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSAnZHBtLXhsJztcblxuICAgICAgICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXIoeyBpZCB9KTtcbiAgICAgICAgICBtb25hY28ubGFuZ3VhZ2VzLnNldFRva2Vuc1Byb3ZpZGVyKGlkLCBuZXcgRFBNWExUb2tlblByb3ZpZGVyKCkpO1xuXG4gICAgICAgICAgY29uc3QgbGl0ZXJhbEZnID0gJzNiODczNyc7XG4gICAgICAgICAgLy9jb25zdCBpZEZnID0gJzM0NDQ4Mic7XG4gICAgICAgICAgY29uc3Qgc3ltYm9sc0ZnID0gJzM0NDQ4Mic7XG4gICAgICAgICAgY29uc3Qga2V5d29yZEZnID0gJzcxMzJhOCc7XG4gICAgICAgICAgY29uc3QgZXJyb3JGZyA9ICdmZjAwMDAnO1xuXG4gICAgICAgICAgbW9uYWNvLmVkaXRvci5kZWZpbmVUaGVtZSgnZHBtLXhsLWJsYWNrJywge1xuICAgICAgICAgICAgYmFzZTogJ3ZzJyxcblxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgeyB0b2tlbjogJ3dpdGguZHBtLXhsJywgZm9yZWdyb3VuZDoga2V5d29yZEZnIH0sXG4gICAgICAgICAgICAgIHsgdG9rZW46ICdncm91cF9ieS5kcG0teGwnLCBmb3JlZ3JvdW5kOiBrZXl3b3JkRmcgfSxcbiAgICAgICAgICAgICAgeyB0b2tlbjogJ2Ficy5kcG0teGwnLCBmb3JlZ3JvdW5kOiBrZXl3b3JkRmcgfSxcbiAgICAgICAgICAgICAgeyB0b2tlbjogJ2lzbnVsbC5kcG0teGwnLCBmb3JlZ3JvdW5kOiBrZXl3b3JkRmcgfSxcblxuICAgICAgICAgICAgICB7IHRva2VuOiAnYm9vbGVhbl9saXRlcmFsLmRwbS14bCcsIGZvcmVncm91bmQ6IGxpdGVyYWxGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAnaW50ZWdlcl9saXRlcmFsLmRwbS14bCcsIGZvcmVncm91bmQ6IGxpdGVyYWxGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAnZGVjaW1hbF9saXRlcmFsLmRwbS14bCcsIGZvcmVncm91bmQ6IGxpdGVyYWxGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAncGVyY2VudF9saXRlcmFsLmRwbS14bCcsIGZvcmVncm91bmQ6IGxpdGVyYWxGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nX2xpdGVyYWwuZHBtLXhsJywgZm9yZWdyb3VuZDogbGl0ZXJhbEZnIH0sXG4gICAgICAgICAgICAgIHsgdG9rZW46ICdsZXR0ZXJzX251bWJlcnMuZHBtLXhsJywgZm9yZWdyb3VuZDogbGl0ZXJhbEZnIH0sXG5cbiAgICAgICAgICAgICAgeyB0b2tlbjogJ2FuZC5kcG0teGwnLCBmb3JlZ3JvdW5kOiBzeW1ib2xzRmcgfSxcbiAgICAgICAgICAgICAgeyB0b2tlbjogJ29yLmRwbS14bCcsIGZvcmVncm91bmQ6IHN5bWJvbHNGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAneG9yLmRwbS14bCcsIGZvcmVncm91bmQ6IHN5bWJvbHNGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAnbm90LmRwbS14bCcsIGZvcmVncm91bmQ6IHN5bWJvbHNGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAnYXNzaWduLmRwbS14bCcsIGZvcmVncm91bmQ6IHN5bWJvbHNGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAnZXEuZHBtLXhsJywgZm9yZWdyb3VuZDogc3ltYm9sc0ZnIH0sXG4gICAgICAgICAgICAgIHsgdG9rZW46ICduZS5kcG0teGwnLCBmb3JlZ3JvdW5kOiBzeW1ib2xzRmcgfSxcbiAgICAgICAgICAgICAgeyB0b2tlbjogJ2x0LmRwbS14bCcsIGZvcmVncm91bmQ6IHN5bWJvbHNGZyB9LFxuICAgICAgICAgICAgICB7IHRva2VuOiAnbGUuZHBtLXhsJywgZm9yZWdyb3VuZDogc3ltYm9sc0ZnIH0sXG4gICAgICAgICAgICAgIHsgdG9rZW46ICdndC5kcG0teGwnLCBmb3JlZ3JvdW5kOiBzeW1ib2xzRmcgfSxcbiAgICAgICAgICAgICAgeyB0b2tlbjogJ2dlLmRwbS14bCcsIGZvcmVncm91bmQ6IHN5bWJvbHNGZyB9LFxuXG4gICAgICAgICAgICAgIHsgdG9rZW46ICdlcnJvci5kcG0teGwnLCBmb3JlZ3JvdW5kOiBlcnJvckZnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgICAgICdlZGl0b3IuZm9yZWdyb3VuZCc6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIoJ2RwbS14bCcsIGdldERwbVhsQ29tcGxldGlvblByb3ZpZGVyKG1vbmFjbykpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5tb25hY29QcmVMb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb1ByZUxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICB3aW4ucmVxdWlyZShcbiAgICAgICAgICBbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQod2luLm1vbmFjbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGBVbmFibGUgdG8gbG9hZCBlZGl0b3IvZWRpdG9yLm1haW4gbW9kdWxlLCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIXdpbi5yZXF1aXJlKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlclNjcmlwdCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xuICAgICAgICBsb2FkZXJTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBsb2FkZXJTY3JpcHQuc3JjID0gYCR7YmFzZVVybH0vdnMvbG9hZGVyLmpzYDtcbiAgICAgICAgbG9hZGVyU2NyaXB0Lm9ubG9hZCA9IGFtZExvYWRlcjtcbiAgICAgICAgbG9hZGVyU2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkICR7bG9hZGVyU2NyaXB0LnNyY30sIHBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuYCk7XG4gICAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobG9hZGVyU2NyaXB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtZExvYWRlcigpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMubm90aWZ5RXZlbnQoJ2xvYWQtZXJyb3InLCB7IGVycm9yIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjbGVhblJlc2l6ZSgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fcmVzaXplJCkge1xuICAgICAgdGhpcy5fcmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclJlc2l6ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmNsZWFuUmVzaXplKCk7XG4gICAgdGhpcy5fcmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZWRpdG9yIS5sYXlvdXQoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlFdmVudCgncmVzaXplJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZWRpdG9yKSByZXR1cm47XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fZWRpdG9yIS5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmluaXRNb25hY28odGhpcy5fb3B0aW9ucywgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksICt0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpO1xuICAgIGlmIChhbGxLZXlzLmxlbmd0aCA9PT0gMSAmJiBhbGxLZXlzWzBdID09PSAnZGlzYWJsZWQnKSByZXR1cm47XG4gICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVzaXplKCk7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgdGhpcy5fZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2VkaXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==