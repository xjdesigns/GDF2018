// // COMPONENTS
import { CardComponent } from './components/card/card.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoTitleComponent } from './components/info-title/info-title.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const ComponentsProvider = [
  CardComponent,
  InfoBarComponent,
  MenuComponent,
  InfoTitleComponent,
  SideNavComponent
];

// // EXPORT PROVIDERS AS ONE
export const GDFComponentProvider = [
  ...ComponentsProvider
];
