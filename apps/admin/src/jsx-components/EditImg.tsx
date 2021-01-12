import React, { FC, useState, useEffect } from 'react'
import { EditPropertyProps, flat } from 'admin-bro'
import { DropZone, FormGroup, Label, DropZoneItem } from '@admin-bro/design-system'

const Edit: FC<EditPropertyProps> = (props) => {
  const { property, record, onChange } = props;
  const { params } = record
  const { custom } = property as unknown as { custom: any };

  const path = flat.get(params, custom.filePathProperty)
  const key = flat.get(params, custom.keyProperty)
  const file = flat.get(params, custom.fileProperty)

  const [originalKey, setOriginalKey] = useState(key)
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>([])

  useEffect(() => {
    // it means means that someone hit save and new file has been uploaded
    // in this case fliesToUpload should be cleared.
    // This happens when user turns off redirect after new/edit
    if (
      (typeof key === 'string' && key !== originalKey)
      || (typeof key !== 'string' && !originalKey)
    ) {
      setOriginalKey(key)
      setFilesToUpload([])
    }
  }, [key, originalKey])

  const onUpload = (files: Array<File>): void => {
    console.log("onUpload(files):", files);
    setFilesToUpload(files)
    onChange(custom.fileProperty, files)
  }

  const handleRemove = () => {
    onChange(custom.fileProperty, null)
  }
  console.log("key: ",key)
  console.log("props: ",props)
  return (
    <FormGroup>
      <Label>{property.label}</Label>
      <DropZone
        onChange={onUpload}
        multiple={false}
        validate={{
          mimeTypes: custom.mimeTypes as Array<string>,
          maxSize: custom.maxSize,
        }}
        files={filesToUpload}
      />
      {!custom.multiple && key && path && !filesToUpload.length && file !== null && (
        <DropZoneItem filename={key} src={`/uploads/${key}`} onRemove={handleRemove} />
      )}
    </FormGroup>
  )
}

export default Edit;