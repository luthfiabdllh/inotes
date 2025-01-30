"use client";

import React, { useEffect } from 'react';
import EditorJS, { ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Image from '@editorjs/image';
import Code from '@editorjs/code';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import Delimiter from '@editorjs/delimiter';
import Warning from '@editorjs/warning';
import './editor.css';



const Editor: React.FC = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
          },
        },
        list: {
          class: List as unknown as ToolConstructable,
          inlineToolbar: true
        },
        paragraph: {
          class: Paragraph as unknown as ToolConstructable,
          inlineToolbar: true
        },
        image: {
          class: Image,
          inlineToolbar: true
        },
        code: {
          class: Code,
          inlineToolbar: true
        },
        quote: {
          class: Quote,
          inlineToolbar: true
        },
        table: {
          class: Table as unknown as ToolConstructable,
          inlineToolbar: true
        },
        delimiter: Delimiter,
        warning: Warning,
      },
      placeholder: 'Write your note here...',
      onReady: () => {
        document.querySelectorAll('.ce-header').forEach((element) => {
          element.classList.add('editor-heading');
        });
      }
    });
    

    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      }).catch((e) => console.error('ERROR editor cleanup', e));
    };
  }, []);

  return (
    <div className='editor-wrapper'>
      <div id="editorjs" className='editor-container py-10'></div>
    </div>
  );
};

export default Editor;