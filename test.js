import test from 'ava'
import tmp from 'tmp'
import pathEmpty from './'

const fp = tmp.dirSync()

test('sync works', t => {
	t.false(pathEmpty.sync(fp.name))
})

test('async works', async t => {
	t.plan(1)
	const empty = await pathEmpty(fp.name)
	t.false(empty)
})

test('sync throws', t => {
	t.plan(1)
	t.throws(function () {
		pathEmpty.sync('./sd')
	}, Error)
})

test('async rejected', async t => {
	t.plan(1)
	try {
		await pathEmpty('./sd')
		t.fail()
	} catch (err) {
		t.pass()
	}
})
