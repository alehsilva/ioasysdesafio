import { BalaoErro } from './styles';

export default function ErrorDialog({ erro }: { erro: string }): JSX.Element {
  return <BalaoErro>{erro}</BalaoErro>;
}
