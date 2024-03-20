<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
     import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

    import { Essentials } from '@ckeditor/ckeditor5-essentials';
    import { Bold, Italic,Strikethrough,Subscript,Superscript,Code,Underline } from '@ckeditor/ckeditor5-basic-styles';
    import { Link } from '@ckeditor/ckeditor5-link';
    import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
    import { Heading } from '@ckeditor/ckeditor5-heading';
    import { Font } from '@ckeditor/ckeditor5-font';
    import { Alignment } from '@ckeditor/ckeditor5-alignment';
    import { ImageUpload,Image } from '@ckeditor/ckeditor5-image';
    import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
    import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
    import { List,TodoList } from '@ckeditor/ckeditor5-list';
    import { Indent } from '@ckeditor/ckeditor5-indent';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    plugins: [ Essentials,  Link, Paragraph, Heading, Font, Alignment,
                                Bold, Italic, Strikethrough, Subscript, Superscript, Code, Underline,
                                ImageUpload, Image,BlockQuote, CodeBlock, List, TodoList, Indent
                             ],
                    toolbar: {
                        items: [
                            'undo', 'redo',
                            '|', 'heading',
                            '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                            '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code','underline',
                            // '-', // break point
                            '|', 'alignment', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                            '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
                        ],
                        shouldNotGroupWhenFull: true
                    }
                }
            };
        }
    }
</script>