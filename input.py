import bz2, base64
exec(bz2.decompress(base64.b64decode('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')))
