import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
