const Editor = () => {
    const editorContainer = document.createElement('div');
    editorContainer.className = 'editor';
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Escreva seu código HTML aqui...';
    editorContainer.appendChild(textarea);

    textarea.addEventListener('input', () => {
        updatePreview(textarea.value);
    });

    return editorContainer;
};

function updatePreview(htmlContent) {
    const previewContainer = document.getElementById('preview');
    previewContainer.innerHTML = htmlContent; // Atualizando a pré-visualização com o conteúdo do editor
}

export default Editor;