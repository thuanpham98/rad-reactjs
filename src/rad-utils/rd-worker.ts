export function rdCreateWorker(url: string | URL, option?: WorkerOptions) {
    return new Worker(url, Object.assign({ type: 'module' }, option));
}