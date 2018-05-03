import { Dataset } from 'state-management/models';

export const getFilterValues = (state: any) => state.root.datasets.filterValues;
export const getActiveFilters = (state: any) => state.root.datasets.activeFilters;
export const getText = (state: any) => state.root.datasets.activeFilters.text;

export const getDatasets = (state: any) => state.root.datasets.datasets;
export const getSelectedSets = (state: any) => state.root.datasets.selectedSets;

export const getLoading = (state: any) => state.root.datasets.loading;
export const getTotalSets = (state: any) => {
  if ('all' in state.root.datasets.filterValues &&
    state.root.datasets.filterValues['all'].length > 0) {
    return state.root.datasets.filterValues['all'][0].totalSets;
  } else {
    return 0
  }
}
export const getCurrentSet = (state: any) => state.root.datasets.currentSet;
