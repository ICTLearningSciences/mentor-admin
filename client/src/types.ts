/*
This software is Copyright ©️ 2020 The University of Southern California. All Rights Reserved. 
Permission to use, copy, modify, and distribute this software and its documentation for educational, research and non-profit purposes, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and subject to the full license file found in the root of this software deliverable. Permission to make commercial use of this software may be obtained by contacting:  USC Stevens Center for Innovation University of Southern California 1150 S. Olive Street, Suite 2300, Los Angeles, CA 90115, USA Email: accounting@stevens.usc.edu

The full terms of this copyright and license should always be found in the root directory of this software deliverable as "license.txt" and if these terms are not found with this software, please contact the USC Stevens Center for the full license.
*/

export interface Edge<T> {
  cursor: string;
  node: T;
}

export interface PageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Connection<T> {
  edges: Edge<T>[];
  pageInfo: PageInfo;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserAccessToken {
  user: User;
  accessToken: string;
  expirationDate: string;
}

export interface Mentor {
  id: string;
  name: string;
  shortName: string;
  title: string;
  sets: Set[];
  questions: Question[];
}

export interface QuestionSet {
  set: Set;
  questions: Question[];
}

export interface Set {
  id: string;
  name: string;
  description: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  question: string;
  set?: Set;
  topics: Topic[];
  video: string;
  transcript: string;
  status: Status;
  recordedAt: string;
}

export enum Status {
  INCOMPLETE = "Incomplete",
  COMPLETE = "Complete",
}