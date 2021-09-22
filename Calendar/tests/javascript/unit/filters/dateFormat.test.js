/**
 * @copyright Copyright (c) 2019 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import dateFormat from "../../../../src/filters/dateFormat.js";

describe('format/dateFormat test suite', () => {

	it('should format an all-day date', () => {
		const date = new Date(2019, 0, 1, 0, 0, 0, 0)
		expect(dateFormat(date, true, 'de')).toMatchSnapshot()
	})

	it('should format a timed date', () => {
		const date = new Date(2019, 0, 1, 0, 0, 0, 0)
		expect(dateFormat(date, false, 'de')).toMatchSnapshot()
	})

})
