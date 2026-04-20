import { Component } from '@angular/core';


import { SkillsGrid } from './skills-grid/skills-grid';
import { SkillGroup } from '@Types';

@Component({
  selector: 'Portfolio-skills',
  imports: [SkillsGrid],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  frameworkGroups: SkillGroup[] = [
    {
      groupName: 'Frontend',
      basePath: './Icons/Frameworks/',
      items: [
        { fileName: 'NodeJS.svg', name: 'Node.js' },
        { fileName: "Bootstrap.svg", name: "Bootstrap" },
        { fileName: 'Angular.svg', name: 'Angular' },
        { fileName: 'React.svg', name: 'React' },
        { fileName: "Flask.svg", name: 'Flask' },
        { fileName: 'Vue.svg', name: 'vue' },
      ]
    },
    {
      groupName: 'Backend',
      basePath: './Icons/Frameworks/',
      items: [
        { fileName: 'Hono.svg', name: 'Hono' },
        { fileName: 'Rails.svg', name: 'Rails' },
        { fileName: 'Laravel.svg', name: 'Laravel' },
        { fileName: 'DotNet.svg', name: 'ASP.NET' },
      ]
    }
  ];

  languagesGroups: SkillGroup[] = [
    {
      basePath: './Icons/Languages/',
      items: [
      { fileName: 'Python.svg', name: 'Python' },
      { fileName: 'Java.svg', name: 'Java' },
      { fileName: 'C_Programming.svg', name: 'C' },
      { fileName: 'CSharp.svg', name: 'C#' },
      { fileName: 'CPlusPlus.svg', name: 'C++' },
      { fileName: 'Arduino.svg', name: 'Arduino' },
      { fileName: 'Bash.svg', name: 'Bash' },
      { fileName: 'PHP.svg', name: 'PHP' },
      { fileName: 'Rust.svg', name: 'Rust' },
      { fileName: 'TypeScript.svg', name: 'TypesScript' },
      { fileName: 'JavaScript.svg', name: 'JavaScript' },
      { fileName: 'HTML.svg', name: 'HTML' },
      {fileName: 'CSS.svg', name: 'CSS'},
      ]
    },
  ]

  ToolsGroups: SkillGroup[] = [
    {
      basePath: './Icons/Tools/',
      groupName: 'General Development',
      items: [
        { fileName: 'Figma.svg', name: 'Figma' },
        { fileName: 'GitHub.svg', name: 'GitHub' },
        { fileName: 'UML.svg', name: 'UML' },
        { fileName: 'Slack.svg', name: 'Slack'},
        { fileName: 'Jira.svg', name: 'Jira' },
        { fileName: 'Kanban.svg', name: 'Kanban' },
        { fileName: 'API.svg', name: 'API' },
      ]
    },
    {
      basePath: './Icons/Tools/',
      groupName: 'DevOps',
      items: [
        { fileName: 'GitHubActions.svg', name: 'Git Actions' },
        { fileName: 'Docker.svg', name: 'Docker' },
        { fileName: 'Kubernetes.svg', name: 'Kubernetes' },
        { fileName: 'Jenkins.svg', name: 'Jenkins' },
        { fileName: 'Linux.svg', name: 'Linux' },
        { fileName: 'Azure.svg', name: 'Azure' },
        { fileName: 'GoogleCloud.svg', name: 'Google Cloud' },
      ]
    },
    {
      groupName: 'Data Tools',
      basePath: './Icons/Tools/',
      items: [
        { fileName: 'MySQL.svg', name: 'MySQL'},
        { fileName: 'SQLite.svg', name: 'SQLite' },
        { fileName: 'MongoDB.svg', name: 'MongoDB' },
        { fileName: 'Redis.svg', name: 'Redis' },
        { fileName: 'HDFS.svg', name: 'HDFS' },
        { fileName: 'Kafka.svg', name: 'Kafka' },
        { fileName: 'MQTT.svg', name: 'MQTT' },
      ]
    },
  ]
}
