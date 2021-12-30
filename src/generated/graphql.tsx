import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Class = {
  __typename?: 'Class';
  classLabel: Scalars['Int'];
  id: Scalars['String'];
  sudents: Student;
};

export type ClassInput = {
  classLabel: Scalars['Int'];
};

export type Exam = {
  __typename?: 'Exam';
  date: Scalars['DateTime'];
  exPeriodID?: Maybe<Scalars['String']>;
  examRecord?: Maybe<ExamRecord>;
  examinationPeriod?: Maybe<ExaminationPeriod>;
  id: Scalars['String'];
  subject: Subject;
  subjectID?: Maybe<Scalars['String']>;
};

export type ExamInput = {
  date: Scalars['DateTime'];
  exPeriodID?: InputMaybe<Scalars['String']>;
  subjectID: Scalars['String'];
};

export type ExamRecord = {
  __typename?: 'ExamRecord';
  exam: Exam;
  examID?: Maybe<Scalars['String']>;
  examId: Scalars['String'];
  grade: Grade;
  gradeID?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  passed: Scalars['Boolean'];
  points: Scalars['Float'];
  singed: Scalars['Boolean'];
  student?: Maybe<Student>;
  studentID?: Maybe<Scalars['String']>;
};

export type ExaminationPeriod = {
  __typename?: 'ExaminationPeriod';
  beginningDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  exams: Array<Exam>;
  id: Scalars['String'];
  modulID?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ExaminationPeriodInput = {
  beginningDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  modulID: Scalars['String'];
  name: Scalars['String'];
};

export type Grade = {
  __typename?: 'Grade';
  exam: ExamRecord;
  id: Scalars['String'];
  value: Scalars['Int'];
};

export type GradeInput = {
  value: Scalars['Int'];
};

export type Modul = {
  __typename?: 'Modul';
  id: Scalars['String'];
  moduleCode: Scalars['String'];
  moduleName: Scalars['String'];
};

export type ModulInput = {
  moduleCode: Scalars['String'];
  moduleName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addExam: Exam;
  createClass: Class;
  createEXP: ExaminationPeriod;
  createGrade: Grade;
  createModul: Modul;
  createProfessor: Professor;
  createStudent: Student;
  createSubject: Subject;
  deregisterExam: Scalars['Boolean'];
  login: Student;
  loginProfessor: Professor;
  logout: Scalars['Boolean'];
  registerExam: Scalars['Boolean'];
  registerPassedExam: Scalars['Boolean'];
};


export type MutationAddExamArgs = {
  input: ExamInput;
};


export type MutationCreateClassArgs = {
  input: ClassInput;
};


export type MutationCreateExpArgs = {
  input: ExaminationPeriodInput;
};


export type MutationCreateGradeArgs = {
  input: GradeInput;
};


export type MutationCreateModulArgs = {
  input: ModulInput;
};


export type MutationCreateProfessorArgs = {
  input: ProfessorInput;
};


export type MutationCreateStudentArgs = {
  input: StudentInput;
};


export type MutationCreateSubjectArgs = {
  input: SubjectInput;
};


export type MutationDeregisterExamArgs = {
  examID: Scalars['String'];
};


export type MutationLoginArgs = {
  brind: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginProfessorArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterExamArgs = {
  examID: Scalars['String'];
};


export type MutationRegisterPassedExamArgs = {
  id: Scalars['String'];
  points: Scalars['Float'];
};

export type Professor = {
  __typename?: 'Professor';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  jmbg: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type ProfessorInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  jmbg: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ExamRecordFromId: ExamRecord;
  averageGrade: Scalars['Float'];
  examsFromCurrentExamPeriod: Array<Exam>;
  examsFromExaminationPeriod: ExaminationPeriod;
  getAll: Array<Student>;
  getAllClasses: Array<Class>;
  getAllEXP: Array<ExaminationPeriod>;
  getAllExams: Array<Exam>;
  getAllGrades: Array<Grade>;
  getAllModuls: Array<Modul>;
  getAllProfessors: Array<Professor>;
  getAllSubjects: Array<Subject>;
  isLoggedIn: Scalars['Boolean'];
  me: Student;
  meProfessor: Professor;
  passedExams: Array<ExamRecord>;
  registeredExams: Array<ExamRecord>;
  studentsForModul: Array<Student>;
  studentsSubjects: Array<Subject>;
  studentsWhoSingedExam: Array<ExamRecord>;
  subjectsForParticularModule: Array<Subject>;
  sumESPP: Scalars['Int'];
};


export type QueryExamRecordFromIdArgs = {
  id: Scalars['String'];
};


export type QueryStudentsForModulArgs = {
  moduleName: Scalars['String'];
};


export type QueryStudentsWhoSingedExamArgs = {
  subjectID: Scalars['String'];
};


export type QuerySubjectsForParticularModuleArgs = {
  moduleName: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Professor = 'PROFESSOR',
  Student = 'STUDENT'
}

export type Student = {
  __typename?: 'Student';
  birthDate: Scalars['DateTime'];
  brind: Scalars['String'];
  class: Scalars['String'];
  classID: Scalars['String'];
  email: Scalars['String'];
  exams: ExamRecord;
  firstName: Scalars['String'];
  id: Scalars['String'];
  jmbg: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  modulID: Scalars['String'];
  role: Role;
};

export type StudentInput = {
  birthDate: Scalars['DateTime'];
  brind: Scalars['String'];
  classID: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  jmbg: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  modulID: Scalars['String'];
  password: Scalars['String'];
};

export type Subject = {
  __typename?: 'Subject';
  espp: Scalars['Int'];
  exam: Exam;
  id: Scalars['String'];
  modul: Modul;
  modulID: Scalars['String'];
  professor: Professor;
  professorID: Scalars['String'];
  subjectName: Scalars['String'];
  type: SubjectType;
};

export type SubjectInput = {
  espp: Scalars['Int'];
  modulID: Scalars['String'];
  professorID: Scalars['String'];
  subjectName: Scalars['String'];
  type: SubjectType;
};

export enum SubjectType {
  Elective = 'ELECTIVE',
  Required = 'REQUIRED'
}

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  brind: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Student', id: string, email: string, firstName: string, middleName: string, lastName: string, jmbg: string, brind: string, birthDate: any } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type LoginProfessorMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginProfessorMutation = { __typename?: 'Mutation', loginProfessor: { __typename?: 'Professor', id: string, firstName: string, lastName: string, email: string, password: string, jmbg: string, role: Role } };

export type RegisterPassedExamMutationVariables = Exact<{
  id: Scalars['String'];
  points: Scalars['Float'];
}>;


export type RegisterPassedExamMutation = { __typename?: 'Mutation', registerPassedExam: boolean };

export type RegisterExamMutationVariables = Exact<{
  examID: Scalars['String'];
}>;


export type RegisterExamMutation = { __typename?: 'Mutation', registerExam: boolean };

export type AverageGradeQueryVariables = Exact<{ [key: string]: never; }>;


export type AverageGradeQuery = { __typename?: 'Query', averageGrade: number };

export type EspbQueryVariables = Exact<{ [key: string]: never; }>;


export type EspbQuery = { __typename?: 'Query', sumESPP: number };

export type ExamsFromExaminationPeriodQueryVariables = Exact<{ [key: string]: never; }>;


export type ExamsFromExaminationPeriodQuery = { __typename?: 'Query', examsFromExaminationPeriod: { __typename?: 'ExaminationPeriod', id: string, name: string, beginningDate: any, endDate: any, exams: Array<{ __typename?: 'Exam', id: string, date: any, examRecord?: { __typename?: 'ExamRecord', id: string, studentID?: string | null | undefined, singed: boolean } | null | undefined, subject: { __typename?: 'Subject', subjectName: string, espp: number, type: SubjectType, professor: { __typename?: 'Professor', firstName: string, lastName: string } } }> } };

export type IsLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type IsLoggedInQuery = { __typename?: 'Query', isLoggedIn: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Student', id: string, email: string, firstName: string, middleName: string, lastName: string, jmbg: string, brind: string, birthDate: any, role: Role } };

export type PassedExamsQueryVariables = Exact<{ [key: string]: never; }>;


export type PassedExamsQuery = { __typename?: 'Query', passedExams: Array<{ __typename?: 'ExamRecord', points: number, passed: boolean, grade: { __typename?: 'Grade', value: number }, exam: { __typename?: 'Exam', date: any, examinationPeriod?: { __typename?: 'ExaminationPeriod', name: string } | null | undefined, subject: { __typename?: 'Subject', subjectName: string, espp: number, type: SubjectType, professor: { __typename?: 'Professor', firstName: string, lastName: string } } } }> };

export type ExamRecordFromIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ExamRecordFromIdQuery = { __typename?: 'Query', ExamRecordFromId: { __typename?: 'ExamRecord', id: string, student?: { __typename?: 'Student', firstName: string, lastName: string, brind: string } | null | undefined, exam: { __typename?: 'Exam', subject: { __typename?: 'Subject', subjectName: string } } } };

export type ExamsFromCurrentExamPeriodQueryVariables = Exact<{ [key: string]: never; }>;


export type ExamsFromCurrentExamPeriodQuery = { __typename?: 'Query', examsFromCurrentExamPeriod: Array<{ __typename?: 'Exam', date: any, subject: { __typename?: 'Subject', id: string, subjectName: string, espp: number, type: SubjectType }, examRecord?: { __typename?: 'ExamRecord', student?: { __typename?: 'Student', firstName: string, lastName: string, brind: string } | null | undefined } | null | undefined }> };

export type MeProfessorQueryVariables = Exact<{ [key: string]: never; }>;


export type MeProfessorQuery = { __typename?: 'Query', meProfessor: { __typename?: 'Professor', id: string, firstName: string, lastName: string, email: string, password: string, jmbg: string, role: Role } };

export type StudentsWhoSingedExamQueryVariables = Exact<{
  subjectID: Scalars['String'];
}>;


export type StudentsWhoSingedExamQuery = { __typename?: 'Query', studentsWhoSingedExam: Array<{ __typename?: 'ExamRecord', id: string, exam: { __typename?: 'Exam', subject: { __typename?: 'Subject', subjectName: string } }, student?: { __typename?: 'Student', id: string, firstName: string, lastName: string, brind: string } | null | undefined }> };

export type RegisteredExamsQueryVariables = Exact<{ [key: string]: never; }>;


export type RegisteredExamsQuery = { __typename?: 'Query', registeredExams: Array<{ __typename?: 'ExamRecord', id: string, exam: { __typename?: 'Exam', date: any, subject: { __typename?: 'Subject', espp: number, subjectName: string, type: SubjectType, professor: { __typename?: 'Professor', firstName: string, lastName: string } } } }> };

export type StudentsSubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentsSubjectsQuery = { __typename?: 'Query', studentsSubjects: Array<{ __typename?: 'Subject', id: string, subjectName: string, espp: number, type: SubjectType }> };


export const LoginDocument = gql`
    mutation Login($password: String!, $brind: String!) {
  login(password: $password, brind: $brind) {
    id
    email
    firstName
    middleName
    lastName
    jmbg
    brind
    birthDate
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const LoginProfessorDocument = gql`
    mutation LoginProfessor($password: String!, $email: String!) {
  loginProfessor(password: $password, email: $email) {
    id
    firstName
    lastName
    email
    password
    jmbg
    role
  }
}
    `;

export function useLoginProfessorMutation() {
  return Urql.useMutation<LoginProfessorMutation, LoginProfessorMutationVariables>(LoginProfessorDocument);
};
export const RegisterPassedExamDocument = gql`
    mutation RegisterPassedExam($id: String!, $points: Float!) {
  registerPassedExam(points: $points, id: $id)
}
    `;

export function useRegisterPassedExamMutation() {
  return Urql.useMutation<RegisterPassedExamMutation, RegisterPassedExamMutationVariables>(RegisterPassedExamDocument);
};
export const RegisterExamDocument = gql`
    mutation RegisterExam($examID: String!) {
  registerExam(examID: $examID)
}
    `;

export function useRegisterExamMutation() {
  return Urql.useMutation<RegisterExamMutation, RegisterExamMutationVariables>(RegisterExamDocument);
};
export const AverageGradeDocument = gql`
    query AverageGrade {
  averageGrade
}
    `;

export function useAverageGradeQuery(options: Omit<Urql.UseQueryArgs<AverageGradeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AverageGradeQuery>({ query: AverageGradeDocument, ...options });
};
export const EspbDocument = gql`
    query ESPB {
  sumESPP
}
    `;

export function useEspbQuery(options: Omit<Urql.UseQueryArgs<EspbQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EspbQuery>({ query: EspbDocument, ...options });
};
export const ExamsFromExaminationPeriodDocument = gql`
    query ExamsFromExaminationPeriod {
  examsFromExaminationPeriod {
    id
    name
    beginningDate
    endDate
    exams {
      id
      date
      examRecord {
        id
        studentID
        singed
      }
      subject {
        subjectName
        espp
        type
        professor {
          firstName
          lastName
        }
      }
    }
  }
}
    `;

export function useExamsFromExaminationPeriodQuery(options: Omit<Urql.UseQueryArgs<ExamsFromExaminationPeriodQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ExamsFromExaminationPeriodQuery>({ query: ExamsFromExaminationPeriodDocument, ...options });
};
export const IsLoggedInDocument = gql`
    query IsLoggedIn {
  isLoggedIn
}
    `;

export function useIsLoggedInQuery(options: Omit<Urql.UseQueryArgs<IsLoggedInQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<IsLoggedInQuery>({ query: IsLoggedInDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    firstName
    middleName
    lastName
    jmbg
    brind
    birthDate
    role
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PassedExamsDocument = gql`
    query PassedExams {
  passedExams {
    grade {
      value
    }
    points
    passed
    exam {
      date
      examinationPeriod {
        name
      }
      subject {
        subjectName
        espp
        type
        professor {
          firstName
          lastName
        }
      }
    }
  }
}
    `;

export function usePassedExamsQuery(options: Omit<Urql.UseQueryArgs<PassedExamsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PassedExamsQuery>({ query: PassedExamsDocument, ...options });
};
export const ExamRecordFromIdDocument = gql`
    query ExamRecordFromId($id: String!) {
  ExamRecordFromId(id: $id) {
    id
    student {
      firstName
      lastName
      brind
    }
    exam {
      subject {
        subjectName
      }
    }
  }
}
    `;

export function useExamRecordFromIdQuery(options: Omit<Urql.UseQueryArgs<ExamRecordFromIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ExamRecordFromIdQuery>({ query: ExamRecordFromIdDocument, ...options });
};
export const ExamsFromCurrentExamPeriodDocument = gql`
    query ExamsFromCurrentExamPeriod {
  examsFromCurrentExamPeriod {
    date
    subject {
      id
      subjectName
      espp
      type
    }
    examRecord {
      student {
        firstName
        lastName
        brind
      }
    }
  }
}
    `;

export function useExamsFromCurrentExamPeriodQuery(options: Omit<Urql.UseQueryArgs<ExamsFromCurrentExamPeriodQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ExamsFromCurrentExamPeriodQuery>({ query: ExamsFromCurrentExamPeriodDocument, ...options });
};
export const MeProfessorDocument = gql`
    query MeProfessor {
  meProfessor {
    id
    firstName
    lastName
    email
    password
    jmbg
    role
  }
}
    `;

export function useMeProfessorQuery(options: Omit<Urql.UseQueryArgs<MeProfessorQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeProfessorQuery>({ query: MeProfessorDocument, ...options });
};
export const StudentsWhoSingedExamDocument = gql`
    query StudentsWhoSingedExam($subjectID: String!) {
  studentsWhoSingedExam(subjectID: $subjectID) {
    id
    exam {
      subject {
        subjectName
      }
    }
    student {
      id
      firstName
      lastName
      brind
    }
  }
}
    `;

export function useStudentsWhoSingedExamQuery(options: Omit<Urql.UseQueryArgs<StudentsWhoSingedExamQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<StudentsWhoSingedExamQuery>({ query: StudentsWhoSingedExamDocument, ...options });
};
export const RegisteredExamsDocument = gql`
    query RegisteredExams {
  registeredExams {
    id
    exam {
      date
      subject {
        espp
        subjectName
        type
        professor {
          firstName
          lastName
        }
      }
    }
  }
}
    `;

export function useRegisteredExamsQuery(options: Omit<Urql.UseQueryArgs<RegisteredExamsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<RegisteredExamsQuery>({ query: RegisteredExamsDocument, ...options });
};
export const StudentsSubjectsDocument = gql`
    query StudentsSubjects {
  studentsSubjects {
    id
    subjectName
    espp
    type
  }
}
    `;

export function useStudentsSubjectsQuery(options: Omit<Urql.UseQueryArgs<StudentsSubjectsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<StudentsSubjectsQuery>({ query: StudentsSubjectsDocument, ...options });
};