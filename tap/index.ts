/*
tap - used to perform side-effects for notifications from the source observable
*/

// EX 1
canActivate() {
    return this.authService.user$.pipe(
        map((user) => (user ? false: true)),
        tap((canActivate) => {
            if (!canActivate) {
                this.navCtrl.navigateForward('/home');
            }
        })
    )
}

// EX 2
getPhotos() {
    return this.photos$.pipe(
        tap((photos) => this.storage?.set('photos', photos))
    );
}

// EX 3: You can create a side effect of patching a state (state management) with data retrieved from a source