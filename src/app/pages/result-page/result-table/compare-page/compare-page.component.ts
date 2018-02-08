import { Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Origin, Result } from '../../../../common/middleware.data';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css'],
})
export class ComparePageComponent implements OnInit {

  inputArticle: Origin;
  matchedArticle: Result;
  score: number;
  inputAbstractHighlighted: string;
  matchedAbstractHighlighted: string;
  inputMeshHeadings: string;
  matchedMeshHeadings: string;

  constructor(public thisDialogRef: MatDialogRef<ComparePageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {input: Origin, matched: Result}) {
    this.inputArticle = data.input;
    this.matchedArticle = data.matched;
    this.score = data.matched.Matching.Relevance * 100;

    const annotations = this.intersection(this.inputArticle.Annotations, this.matchedArticle.Record.Annotations);
    this.matchedAbstractHighlighted = this.highlightAnnotations(this.matchedArticle.Record.Abstract, annotations);
    this.inputAbstractHighlighted = this.highlightAnnotations(this.inputArticle.Abstract, annotations);

    const meshHeadingsIntersection = this.intersection(this.inputArticle.MeshHeadings, this.matchedArticle.Record.MeshHeadings);
    this.inputMeshHeadings = this.highlightHeadings(this.inputArticle.MeshHeadings, meshHeadingsIntersection);
    this.matchedMeshHeadings = this.highlightHeadings(this.matchedArticle.Record.MeshHeadings, meshHeadingsIntersection);
  }

  ngOnInit() {
  }

  intersection(inputAnnotations: string[], matchedAnnotations: string[]): string[] {
    let result = inputAnnotations;
    result = result.filter((n) => matchedAnnotations.includes(n));
    return result;
  }

  highlightHeadings(meshHeadings: string[], intersection: string[]): string {
    let highlightedText = meshHeadings.toString();
    for (let i = 0; i < intersection.length; i++) {
       highlightedText = highlightedText.split(intersection[i]).join('<span class="mesh_headings">' + intersection[i] + '</span>');
    }
    return highlightedText;
  }

  highlightAnnotations(abstractText: string[], annotations: string[]): string {
    let highlightedText = abstractText.toString();
    for (let i = 0; i < annotations.length; i++) {
      highlightedText = highlightedText.split(annotations[i]).join('<span class="annotations">' + annotations[i] + '</span>');
    }
    return highlightedText;
  }

  close() {
    this.thisDialogRef.close('close');
  }

}
