/*
map - applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
filter - filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.
*/

getChecklistById(id: string) {
    return this.getChecklists().pipe(
        filter((checklists) => checklists.length > 0), // Don't emit if checklists hasn't loaded yet
        map((checklists) => checklists.find((checklist) => checklist.id === id))
    );
}