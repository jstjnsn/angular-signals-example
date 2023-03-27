import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  search = signal('');

  users = signal([
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Mary'
    },
    {
      id: 3,
      name: 'Jon'
    },
  ])

  filteredUsers = computed(() => this.users().filter(u => u.name.toLowerCase().indexOf(this.search().toLowerCase()) > -1))

  logger = effect(() => {
    console.log(this.search())
  })

  setSearchTerm(event: Event) {
    this.search.set((event.target as HTMLInputElement).value);
  }
}
