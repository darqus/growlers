
// @ts-ignore
import { load, subscribe, IStore } from 'growlers/store';
import './index.scss';

// @ts-ignore
import vcart from 'growlers/vcart'
// @ts-ignore
import vsearch from 'growlers/vsearch'
// @ts-ignore
import vtaps from 'growlers/vtaps'

load('hv-taplist');

subscribe((store: IStore) => {
  const tapList = store.filteredTaps
  .slice(0, 3)
  .map(({ beverageName }: { beverageName: string }) => beverageName)
  .join(', ')
  // @ts-ignore
  document.getElementById('like').innerText = tapList
})

vcart('#cart')
vsearch('#search')
vtaps('#taps')
