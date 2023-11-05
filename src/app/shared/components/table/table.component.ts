import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, AfterContentInit } from '@angular/core';

@Directive({ selector: '[tableHeader]' })
export class TableHeaderDirective {
  constructor(public readonly template: TemplateRef<any>) { }
}

@Directive({ selector: '[tableBody]' })
export class TableBodyDirective {
  constructor(public readonly template: TemplateRef<any>) { }
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterContentInit {
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() showIndex: boolean = false;
  @ContentChild(TableHeaderDirective) public header!: TableHeaderDirective;
  @ContentChild(TableBodyDirective) public body!: TableBodyDirective;
  
  ngAfterContentInit(): void {
    console.log('table',this.body)
  }
}