import { Component, inject, Injectable, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star, Bug } from 'lucide-angular';

import { Repo } from '@Types';
import { RepoService } from '../Services/repoService/repo-service';
import { Skills } from './skills/skills';


@Component({
  selector: 'portfolio-homepage',
  imports: [CommonModule, LucideAngularModule,Skills],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss', '../portfolio.scss'],
})

export class Homepage {
  private repoService = inject(RepoService)

  readonly Star = Star;
  readonly Bug = Bug;

  repos = signal<Repo[]>([]);
  error = signal(true);
  loading = signal(false);

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos() {
    this.loading.set(true);
    this.error.set(false);

    this.repoService.GetFirstRepos().subscribe({
      next: (repos) => {
        this.repos.set(repos);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }



  scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}