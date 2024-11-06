export type BuildMode = 'production' | 'development';

export interface BuildPaths {
   entry: string;
   output: string;
   html: string;
   src: string;
}

export interface BuildOptions {
   mode: BuildMode;
   paths: BuildPaths;
   port: number;
}
