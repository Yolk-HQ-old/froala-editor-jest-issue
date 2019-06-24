import FroalaEditor from 'froala-editor';

it('can be created and destroyed', () => {
  const div = document.createElement('div');
  const editor = new FroalaEditor(div);
  editor.destroy();
});
