( function( api ) {

	// Extends our custom "vehicle-rental" section.
	api.sectionConstructor['vehicle-rental'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );