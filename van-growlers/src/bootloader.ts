
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
  console.log(store)
})

vcart('#cart')
vsearch('#search')
vtaps('#taps')
