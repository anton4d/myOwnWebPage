export interface SkillItem {
  fileName: string;
  name: string;
}

export interface SkillGroup {
  groupName?: string;
  basePath: string;
  items: SkillItem[];
}