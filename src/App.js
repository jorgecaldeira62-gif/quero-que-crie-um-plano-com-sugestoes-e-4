import Editor from './components/Editor.js';
import Preview from './components/Preview.js';
import FileManager from './components/FileManager.js';
import Chat from './components/Chat.js';

const App = () => {
    const appContainer = document.createElement('div');

    appContainer.appendChild(FileManager());
    appContainer.appendChild(Editor());
    appContainer.appendChild(Preview());
    appContainer.appendChild(Chat());

    return appContainer;
};

export default App;