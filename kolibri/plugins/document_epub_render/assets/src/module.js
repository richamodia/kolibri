import ContentRendererModule from 'content_renderer_module';
import EPUBComponent from './views/EpubRendererIndex';

class DocumentEPUBModule extends ContentRendererModule {
  get rendererComponent() {
    return EPUBComponent;
  }
}

const documentEPUBModule = new DocumentEPUBModule();

export { documentEPUBModule as default };
