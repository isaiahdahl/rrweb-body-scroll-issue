import './style.css'
import * as rrweb from 'rrweb'


exportRecording(document.querySelector<HTMLButtonElement>('#export')!)

let events: any[] = [];

rrweb.record({
  emit(event) {
    // push event into the events array
    events.push(event);
  },
});

// this function will send events to the backend and reset the events array
function save() {
    const replayer = new rrweb.Replayer(events);
    replayer.play();
    console.log(JSON.stringify(events));
}


export function exportRecording(element: HTMLButtonElement) {
    element.addEventListener('click', () => save())
}