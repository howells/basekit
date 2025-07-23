"use client";

import React from "react";
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "./pagination";

export function BasicPagination() {
  return (
    <Pagination>
      <PaginationPrevious href="#prev" />
      <PaginationList>
        <PaginationPage href="#1" current>
          1
        </PaginationPage>
        <PaginationPage href="#2">2</PaginationPage>
        <PaginationPage href="#3">3</PaginationPage>
      </PaginationList>
      <PaginationNext href="#next" />
    </Pagination>
  );
}

export function PaginationWithEllipsis() {
  return (
    <Pagination>
      <PaginationPrevious href="#prev" />
      <PaginationList>
        <PaginationPage href="#1">1</PaginationPage>
        <PaginationPage href="#2">2</PaginationPage>
        <PaginationPage href="#3" current>
          3
        </PaginationPage>
        <span>...</span>
        <PaginationPage href="#10">10</PaginationPage>
      </PaginationList>
      <PaginationNext href="#next" />
    </Pagination>
  );
}