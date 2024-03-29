import { IconType } from 'react-icons/lib';

interface ISocialButtonData {
  link: string;
  network: string;
  id: number;
}

type ITechStackList = {
  objName: any;
  title: string;
  height: number;
  width: number;
  id: number;
}[];

interface IAttributeData {
  icon: IconType;
  description: string;
  id: number;
}

interface IPages extends Array<Record<'name' | 'route', string>> {}

export type { ISocialButtonData, ITechStackList, IPages, IAttributeData };
