export class HomeworkContent {
  program: string;
  url: string;

  public equals(other: HomeworkContent): boolean {
    return this.program === other.program && this.url === other.url;
  }
}

export function isHomeworkContent(homeworkContent: HomeworkContent | undefined): homeworkContent is HomeworkContent {
  return (homeworkContent as HomeworkContent) !== undefined && homeworkContent.program !== undefined;
}
