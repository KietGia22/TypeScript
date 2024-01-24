interface Directorys {
  addFile: (name: string) => void;
  // Define a config type member here
  configs: {
    default: {
      encoding: string,
      permissions: string
    }
  }
}

class DesktopDirectorys implements Directorys {
  configs = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktops = new DesktopDirectorys();

console.log(Desktops.configs);