import { Text, TextProps } from './themed';

export function MonoText(props: TextProps) {
  return <Text {...props} className="font-space-mono" style={props.style} />;
}
