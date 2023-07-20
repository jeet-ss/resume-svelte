import { localStorageStore } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';

const obj = {
    id: "",
    name: "",
    content: "",
    tags: []
}

const navState = localStorageStore('nav', '/')


export const noteStore = localStorageStore('notes', [])