import { src, dest } from 'gulp';

// HTML packages
import fileinclude from 'gulp-file-include';

const path = './src/html/';

const pages = [
    path + 'index.html',
    path + 'dashboard.html',
    path + 'bookmark.html',
    path + 'chapter-screen.html',
    path + 'chapter-single.html',
    path + 'video-player.html',
    path + 'document-viewer.html',
    path + 'quiz.html',
    path + 'quiz-result.html',
    path + 'select-plan.html',
];

// FOR HTML PAGES
export const htmlInclude = () => {
    return src(pages)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('build'))
}
