import { src, dest } from 'gulp';
import { paths } from '../gulpfile.babel';

// CSS packages
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// FOR STYLESHEETS
export const styles = () => {
    return src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.styles.dest))
};

export const stylesProd = () => {
    return src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        // Add browser list in package json as recommended
        .pipe(autoprefixer({ cascade: false }))
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.styles.dest))
};