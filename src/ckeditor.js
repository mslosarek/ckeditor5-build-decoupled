/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

import Font from '@ckeditor/ckeditor5-font/src/font';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';

export default class DecoupledEditor extends DecoupledEditorBase {}

function Markdown( editor ) {
  const processor = new GFMDataProcessor(editor.editing.view.document);
  editor.data.processor = processor;
}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Link,
  List,
  Paragraph,
  PasteFromOffice,
  Font,
  FontColor,
  Underline,
  Strikethrough,
  Markdown,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
  fontFamily: {
    options: ['Times New Roman", Times, serif', 'Arial, Helvetica, sans-serif', 'Courier, "Lucida Console", monospace'],
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
    ],
  },
  fontColor: {
    colors: [
      'black',
      'gray',
      'silver',
      {
        color: 'white',
        hasBorder: true,
      },
      'maroon',
      'red',
      'purple',
      'fuchsia',
      'green',
      'lime',
      'olive',
      'yellow',
      'navy',
      'blue',
      'teal',
      'aqua',
    ],
    columns: 4,
    documentColors: 12,
    selectedColor: 'black',
  },
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'link',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'blockQuote',
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};
