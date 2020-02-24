import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './icon-font.json';

const Icon = createIconSetFromFontello(fontelloConfig, 'myicons');
export default Icon;
