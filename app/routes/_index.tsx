import type { V2_MetaFunction } from '@remix-run/node';
import Waiting from '~/Waiting';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'sapillo.no' },
    { name: 'description', content: 'Stay tuned!' },
  ];
};

export default function Index() {
  return <Waiting />;
}
