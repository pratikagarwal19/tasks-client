import {Task} from './task';
export class Day {
    _id: string;
    date: string;
    start: number;
    end: number;
    duration: number;
    tasks: Task[];
}