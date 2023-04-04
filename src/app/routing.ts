import { Routes } from '@angular/router';

const Routing: Routes = [
    {
        path: 'categories',
        loadChildren: () =>
            import('./category/category.module').then((m) => m.CategoryModule),
    }
]

export { Routing };