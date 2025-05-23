import { PlasmicRootProvider, PlasmicComponent } from '@plasmicapp/loader-react';
import { PLASMIC } from '../plasmic-init';

export default function Home() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="HomePage" />
    </PlasmicRootProvider>
  );
} 