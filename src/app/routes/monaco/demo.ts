import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NuMonacoEditorComponent,
  NuMonacoEditorDiffComponent,
  NuMonacoEditorDiffModel,
  NuMonacoEditorEvent,
  NuMonacoEditorModel,
} from '@ng-util/monaco-editor';

@Component({
  selector: 'monaco-demo',
  template: `
    <button (click)="disabled = !disabled">Set {{ disabled ? 'enabled' : 'disabled' }}</button>
    <nu-monaco-editor #a [model]="model" [options]="options" [disabled]="disabled"></nu-monaco-editor>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, NuMonacoEditorComponent, NuMonacoEditorDiffComponent],
})
export class MonacoDemoComponent {
  disabled = false;
  value = '{"p1":"a"}';
  options = {};
  model: NuMonacoEditorModel = {
    value: '',
    language: 'dpm-xl',
  };
  oldModel: NuMonacoEditorDiffModel = {
    code: 'const a = 1;',
    language: 'typescript',
  };
  newModel: NuMonacoEditorDiffModel = {
    code: 'const a = 2;',
    language: 'typescript',
  };
  jsonModel: NuMonacoEditorModel | null = null;

  jsonEvent(e: NuMonacoEditorEvent) {
    if (e.type === 'init') {
      this.jsonModel = {
        language: 'json',
        uri: monaco.Uri.parse('a://b/foo.json'),
      };
    }
  }
}
