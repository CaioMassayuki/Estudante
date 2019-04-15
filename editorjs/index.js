import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Embed from '@editorjs/list';
import List from '@editorjs/embed';

const edito = new EditorJS({
  holderId: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link']
    },
    list: {
      class: List,
      inlineToolbar: ['link', 'bold']
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        service: {
          youtube: true,
          coub: true
        }
      }
    }
  }
});

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', function() {
  EditorJS.saver()
    .then(outputData => {
      console.log('Article data: ', outputData);
    })
    .catch(error => {
      console.log('Saving failed:', error);
    });
});
