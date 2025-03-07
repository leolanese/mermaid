/** Created by knut on 14-12-11. */
import { select } from 'd3';
import { log } from '../../logger';
import { getErrorMessage } from '../../utils';

let conf = {};

/**
 * Merges the value of `conf` with the passed `cnf`
 *
 * @param cnf - Config to merge
 */
export const setConf = function (cnf: any) {
  conf = { ...conf, ...cnf };
};

/**
 * Draws a an info picture in the tag with id: id based on the graph definition in text.
 *
 * @param _text - Mermaid graph definition.
 * @param id - The text for the error
 * @param mermaidVersion - The version
 */
export const draw = (_text: string, id: string, mermaidVersion: string) => {
  try {
    log.debug('Renering svg for syntax error\n');

    const svg = select('#' + id);

    const g = svg.append('g');

    g.append('path')
      .attr('class', 'error-icon')
      .attr(
        'd',
        'm411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z'
      );

    g.append('path')
      .attr('class', 'error-icon')
      .attr(
        'd',
        'm459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z'
      );

    g.append('path')
      .attr('class', 'error-icon')
      .attr(
        'd',
        'm340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z'
      );

    g.append('path')
      .attr('class', 'error-icon')
      .attr(
        'd',
        'm400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z'
      );

    g.append('path')
      .attr('class', 'error-icon')
      .attr(
        'd',
        'm496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z'
      );

    g.append('path')
      .attr('class', 'error-icon')
      .attr(
        'd',
        'm436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z'
      );

    g.append('text') // text label for the x axis
      .attr('class', 'error-text')
      .attr('x', 1440)
      .attr('y', 250)
      .attr('font-size', '150px')
      .style('text-anchor', 'middle')
      .text('Syntax error in graph');
    g.append('text') // text label for the x axis
      .attr('class', 'error-text')
      .attr('x', 1250)
      .attr('y', 400)
      .attr('font-size', '100px')
      .style('text-anchor', 'middle')
      .text('mermaid version ' + mermaidVersion);

    svg.attr('height', 100);
    svg.attr('width', 500);
    svg.attr('viewBox', '768 0 912 512');
  } catch (e) {
    log.error('Error while rendering info diagram');
    log.error(getErrorMessage(e));
  }
};

export default {
  setConf,
  draw,
};
