import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './breadcrumb.css';
interface IPathObject {
  path: string;
  breadcrumb: string;
}
interface IProps {
    pathArray: IPathObject[];
}

export function Breadcrumb({pathArray} : IProps) {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(pathArray);

  return (
      <nav className='breadcrumbs' role= "navigation" aria-label="Fil d'Ariane">
            <ol className='breadcrumbs__list'>
                {breadcrumbs.map(({ match, breadcrumb }, index) => { 
                    if (location.pathname != '/') {
                        return (
                            <li className='breadcrumbs__list__element' key={index}>

                                <span className='breadcrumbs__list__link'>{index > 0 && breadcrumb && '>'}</span>
                                {breadcrumb && (
                                    <Link
                                    to={match.pathname}
                                    className={
                                        location.pathname === match.pathname
                                        ? 'breadcrumb-active'
                                        : 'breadcrumb-not-active'
                                    }
                                    aria-current={location.pathname === match.pathname ? "page" : false}
                                    >
                                    {breadcrumb}
                                    </Link>
                                )}
                            </li>
                        );
                    }
                })}
            </ol>
      </nav>
  );
}
