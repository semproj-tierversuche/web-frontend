/*
  Is the User Input publication.
 */
export interface Origin {
  Abstract: string[];
  Annotations: any[];
  Authors: string[];
  Date: string;
  Identifier: any[];
  Journal: string[];
  Keywords: any[];
  Link: string;
  MeshHeadings: string[];
  PMID: number;
  PublicationType: string;
  Substances: any[];
  Suggest: string;
  TextminingVersion: string;
  Title: string;
}

/*

 */
export interface Matching {
  AnimalTest: string; // YES/NO/BOTH
  Relevance: number;
  Similar: boolean;
}

export interface Record {
  Abstract: string[];
  Annotations: any[];
  Authors: string[];
  Date: string;
  Identifier: any[];
  Journal: string[];
  Keywords: any[];
  Link: string;
  MeshHeadings: string[];
  PMID: number;
  PublicationType: string;
  Substances: any[];
  Suggest: string;
  TextminingVersion: string;
  Title: string;
}

export interface Result {
  Matching: Matching;
  Record: Record;
}

export interface MiddlewareData {
  Origin: Origin;
  Results: Result[];
}


