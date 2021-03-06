durandal.datatable
==================

A DataTable Widget for durandal

#How to use:

##view.html

	<!-- ko widget: {
		kind: 'datatable', 
		rows: results, 
		lang: lang.columns, 
		itemPerPage: 10, 
		search: true,
		columnsBlackList: ['_id']
	} -->
	<!-- /ko -->

##viewmodel.js

	var viewmodel = {
		lang: {
			columns: {  // i18n key value set
				_id: 'ID',
				title: 'Title',
				desc: 'Description',
				date: 'Start Date'
			}
		},

		results: ko.observableArray([
			{_id: 1, title: 'A title', desc: 'A description', date: new Date()},
			...
		])
	}

#Features

- ToggleSort Columns clicking on the column headers
- Autocalulate the columns
- Hide or omit Columns
- Uses Bootstrap

##Future Features

- Search Filtering
- Pagination
- AJAX Pagination
- Scrolling
- Actions/events/buttons by row
- Sortable (drag & drop)
- Editing
- And much much more

[![Analytics](https://ga-beacon.appspot.com/UA-47717226-1/durandal.datatable/home)](https://github.com/igrigorik/ga-beacon)
