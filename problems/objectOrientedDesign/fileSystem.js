/** File System
 * Explain the data structures and algorithms that you would use to design an in-memory file system.
 * Illustrate with an example in code where possible.
 */


class Folder {
  constructor(name) {
    this.type = 'folder';
    this.name = name;
    this.filesAndFolders = [];
  }

  findFolder(name) {
    if (this.name === name) {
      return this;
    }
    this.filesAndFolders.forEach((item) => {
      if (item.type === 'folder') {
        item.findFolder(name);
      }
    });
  }

  findFile(name) {
    this.filesAndFolders.forEach((item) => {
      if (item.type === 'file' && item.name === name) {
        return item;
      }
    });
    this.filesAndFolders.forEach((item) => {
      if (item.type === 'folder') {
        item.findFile(name);
      }
    });
  }
}

class File {
  constructor(name, content) {
    this.type = 'file';
    this.name = name;
    this.content = content !== undefined ? content : null;
  }
}

class FileSystem {
  constructor(name) {
    this.folder = new Folder(name);
    this.currentFolder = null;
    this.currentFile = null;
    this.index = {};
  }

  showCurrent() {
    if (this.currentFolderOrFile !== null) {
      return this.currentFolderOrFile.name;
    }
    console.log('no file');
  }

  findFolder(name) {
    let found = this.folder.findFolder(name);
    this.currentFolder = found;
    return found;
  }

  findFile(name) {
    let found = this.folder.findFile(name);
    this.currentFile = found;
    return found;
  }

  addFileToCurrentFolder(name, content) {
    this.currentFolder.push(new File(name, content));
  }

  addFolderToCurrent(name) {
    this.currentFolder.push(new Folder(name));
  }

  deleteCurrentFolder() {
    // delete from parent
  }

  deleteCurrentFile() {
    // delete from parent
  }
}

// folder as a tree, and file as a leaf
// main algorithm will be tree search algorithm (BFS and DFS)
// to speed up a folder or file search, could build an index based on the name
// could have methods to create folder and create file
// could find path