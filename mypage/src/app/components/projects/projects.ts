import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Repo, RepoMeta } from '@Types';
import { RepoService } from '../Services/repoService/repo-service';
import { LucideAngularModule, Star, Bug } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss','../portfolio.scss']
})
export class Projects implements OnInit {
  private repoService = inject(RepoService);
  private destroyRef = inject(DestroyRef);

  readonly Star = Star;
  readonly Bug = Bug;

  error = signal(false);
  loading = signal(false);
  repos = signal<Repo[]>([]);
  meta = signal<RepoMeta | null>(null);
  currentPage = signal(1);

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos() {
    this.loading.set(true);
    this.error.set(false);

    this.repoService.GetRepos(this.currentPage())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.repos.set(res.result);
          this.meta.set(res.meta);
          this.loading.set(false);
        },
        error: () => {
          this.error.set(true);
          this.loading.set(false);
        },
      });
  }

  nextPage() {
    if (this.meta()?.has_more) {
      this.currentPage.update(p => p + 1);
      this.loadRepos();
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
      this.loadRepos();
    }
  }

  totalPages = computed(() => {
    const m = this.meta();
    if (!m) return 1;
    return Math.ceil(m.total / m.per_page);
  });
}