define(['durandal/composition', 'knockout'], function(composition, ko){
	
	function DataTable(){
		this.sortColumn = ko.observable(-1);
		this.sortDirection = 0;
	}
	
	DataTable.prototype.activate = function(data){
		this.columns = ko.observableArray();
		this.columnsKeys = ko.observableArray();
		this.rows = ko.observableArray();

		var me = this;
		this.settings = data;

		if(ko.isObservable(this.settings.rows)){
			this.settings.rows.subscribe(function(newValue){
				me.rows(newValue);
				me.onRowsChange();
			});
			this.rows(this.settings.rows());
		}else{
			this.rows(this.settings.rows);
		}
		this.onRowsChange();
	};
	
	DataTable.prototype.onRowsChange = function(){
		var item = this.settings.rows()[0],
			key
		;
		
		for(key in item){
			if(item.hasOwnProperty(key)){
				this.columns.push(this.settings.lang[key]);
				this.columnsKeys.push(key);
			}
		}
		
		console.log('columns', this.columns());
		console.log('columnsKeys', this.columnsKeys());
	};
	
	DataTable.prototype.toggleSort = function(keyIx){
		var key = this.columnsKeys()[keyIx],
			me = this
		;
		if(this.sortDirection <= 0){
			this.sortDirection = 1;
		}else{
			this.sortDirection = -1;
		}

		this.rows.sort(function(a, b){
			if(a[key] > b[key]){
				return -1 * me.sortDirection;
			}else if(a[key] < b[key]){
				return 1 * me.sortDirection;
			}else{
				return 0;
			}
		});
		
		this.sortColumn(keyIx);
	};
		
	return DataTable;
});